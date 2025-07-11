import cookie from "js-cookie";
import ReactGA from "react-ga4";
import * as Sentry from "@sentry/browser";
import { analytikillHttpClient } from "./httpClients";

const isProduction = process.env.NODE_ENV === "production";
const useLocalApi = false;
const discordLoginCallbackUri =
	!isProduction && useLocalApi ? "http://localhost:3001" : "https://tonysanti.com/prx/csc-stat-api";
const discordClientId = "1131226870357172347";

export const discordLoginCallback = (code: string) =>
	fetch(`${discordLoginCallbackUri}/discord/login`, {
		method: "POST",
		body: JSON.stringify({
			code,
			redirect_uri: window.location.origin,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async res => {
		const json = await res.json();
		cookie.set("access_token", json.access_token, { expires: 7 });
		cookie.set("refresh_token", json.refresh_token);
		cookie.set("jwt", json.jwt, { expires: 999 });
		return json;
	});

export const discordFetchUser = async (access_token: string) => {
	return fetch("https://discord.com/api/users/@me", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then(async res => {
			const user = await res.json();
			ReactGA.set({ discordId: user.id, discordUsername: user.username });
			Sentry.setUser({ discordId: user.id, discordUsername: user.username });
			return user;
		})
		.catch(err => {
			console.log(err);
			return err;
		});
};

export function discordLogin() {
	cookie.set("return_path", window.location.pathname);
	const env: string = process.env.NODE_ENV!;
	const DISCORD_REDIRECT_URL = env === "production" ? `https://analytikill.com` : `http://localhost:3000`;
	window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${DISCORD_REDIRECT_URL}%2Fcb&response_type=code&scope=identify`;
}

export async function discordRefreshToken () {
	const refreshToken = cookie.get("refresh_token");
	const result = await analytikillHttpClient.post("/discord/refresh", {
		refresh_token: refreshToken,
	});
	if (result.status === 200) {
		const json = result.data;
		cookie.set("access_token", json.access_token, { expires: 7 });
		cookie.set("refresh_token", json.refresh_token);
		cookie.set("jwt", json.jwt, { expires: 999 });
		return json;
	} else {
		console.error("Failed to refresh token", result);
		throw new Error("Failed to refresh token");
	}
}

export const discordSignOut = () => {
	cookie.remove("access_token");
	cookie.remove("refresh_token");
	Sentry.setUser(null);
	window.location.href = "/";
};
