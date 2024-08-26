import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { MatchHistory, MatchHistoryPlayerStat } from "../models/match-history-types";
import { ExtendedStats } from "../models/extended-stats";

const getPlayerMatchHistoryData = async (steamId?: string) =>
	await fetch(`https://tonysanti.com/prx/csc-stat-api/csc/player-match-history?steamId=${steamId}`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).then(async response => {
		return response.json();
	});

const getIndividualMatchHistory = async (matchId?: string) =>
	await fetch(`https://tonysanti.com/prx/csc-stat-api/csc/match-history?matchId=${matchId}`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).then(async response => {
		return response.json();
	});

const getExtendedStats = async () =>
	await fetch(`https://tonysanti.com/prx/csc-stat-api/analytikill/extendedStats`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).then(async response => {
		return response.json();
});

const getExtendedMatchStats = async (matchId?: string) =>
	await fetch(`https://tonysanti.com/prx/csc-stat-api/analytikill/extendedMatchStats?matchId=${matchId}`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).then(async response => {
		return response.json();
});

const getPlayerReputation = async ( discordId?: string) =>
	await fetch(`https://tonysanti.com/prx/csc-stat-api/analytikill/plusRep?discordId=${discordId}`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).then(async response => {
		return response.json();
	});


export function useAnalytikillPlayerMatchHistory(steamId?: string): UseQueryResult<MatchHistoryPlayerStat[]> {
	return useQuery(["analytikillPlayerMatchHistory", steamId], () => getPlayerMatchHistoryData(steamId), {
		staleTime: 1000 * 60 * 60 * 24, // 1 second * 60 * 60 * 24 = 24 hour
		enabled: Boolean(steamId),
		onError: () => {},
	});
}

export function useAnalytikillIndividualMatchHistory(matchId?: string): UseQueryResult<MatchHistory> {
	return useQuery(["analytikillIndividualMatchHistory", matchId], () => getIndividualMatchHistory(matchId), {
		staleTime: 1000 * 60 * 60 * 24, // 1 second * 60 * 60 * 24 = 24 hour
		enabled: Boolean(matchId),
		onError: () => {},
	});
}

export function useAnalytikillExtendedStats(): UseQueryResult<ExtendedStats> {
	return useQuery(["analytikillExtendedStats"], () => getExtendedStats(), {
		staleTime: 1000 * 60 * 60, // 1 second * 60 * 60 * 24 = 24 hour
		onError: () => {},
	});
}

export function useAnalytikillExtendedMatchStats( matchId: string, shouldFetch = false): UseQueryResult<Record<string,any>> {
	return useQuery(["analytikillExtendedMatchStats", matchId], () => getExtendedMatchStats( matchId ), {
		staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
		enabled: shouldFetch,
		onError: () => {},
	});
}

export function useFetchReputation( discordId?: string): UseQueryResult<{ repped: number, plusRep: Record<string, string>}> {
	return useQuery(["Reputation", discordId], () => getPlayerReputation( discordId ), {
		staleTime: 1000 * 60 * 60 * 1, // 1 second * 60 * 60 * 1 = 1 hour
		enabled: Boolean(discordId),
		onError: () => {},
	});
}

