import * as React from 'react';
import { Router as Wouter, Route, Switch, useLocation } from 'wouter';
import { Container } from './common/components/container';
import { 
  Home, LoginCallBack, Charts, 
  LeaderBoards, Franchises, Franchise, 
  Players, Player, Profile, 
  Playground, TeamStandings, Team, 
  TeamBuilder, ExportData
} from './pages';
import { useDataContext } from './DataContext';
import { ProgressBar } from './common/components/progress';
import ReactGA from 'react-ga4';
import { ErrorBoundary } from './common/components/errorBoundary';
import { discordFetchUser } from './dao/oAuth';
import cookie from 'js-cookie';
import { useLocalStorage } from './common/hooks/localStorage';
import { AiOutlineCloseCircle } from 'react-icons/ai';


const routes = [
  { path: `/`, component: () => <Charts /> },
  { path: `/about`, component: () => <Home /> },
  { path: `/cb`, component: () => <LoginCallBack /> },
  { path: `/charts`, component: () => <Charts />},
  { path: `/export`, component: () => <ExportData /> },
  { path: `/franchises`, component: () => <Franchises /> },
  { path: `/franchises/:franchise`, component: () => <Franchise /> },
  { path: `/franchises/:franchise/:team`, component: () => <Team />},
  { path: `/players`, component: () => <Players /> },
  { path: `/players/:tier/:id`, component: () => <Player /> },
  { path: `/team-builder`, component: () => <TeamBuilder /> },
  { path: `/leaderboards`, component: () => <LeaderBoards /> },
  { path: `/playground`, component: () => <Playground /> },
  { path: `/profile`, component: () => <Profile /> },
  { path: `/standings`, component: () => <TeamStandings />},
];

export function Router(){
  const [ closeNotificationBanner, setCloseNotificationBanner] = useLocalStorage("closeNotificationbanner", "")
  const { loading, discordUser, setDiscordUser } = useDataContext();
  const BASE_ROUTE = "";
  const [ location ] = useLocation();

  React.useEffect( () => {
    const fetchUser = async () => {
		const accessToken = cookie.get( "access_token" );
			if( accessToken && discordUser === null ){
				const user = await discordFetchUser( accessToken );
				if( user ){
					setDiscordUser( user );
				}
		  }
    }

	fetchUser();
  }, [ discordUser, setDiscordUser] );
  
  ReactGA.send({ hitType: "pageview", page: location, title: 'Page View' });

  return (
    <>
      { loading.isLoadingCscPlayers && <ProgressBar />}
      <Wouter base={BASE_ROUTE}>
        <div>
        { !closeNotificationBanner && 
                <button className='w-full h-8 bg-teal-600 text-center' onClick={() => setCloseNotificationBanner("true")}>
                  MMR is disabled until numbers are public. 
                  <AiOutlineCloseCircle className='float-right mr-4' size="1.5em"/>
                </button>
              }
            <ErrorBoundary>
              <Switch>
                { routes.map( route => <Route key={`route${route.path}`} { ...route} /> ) }
                <Route key="404, Page not found." component={ () => <Container><h1>404</h1></Container>} />
              </Switch>
            </ErrorBoundary>
          </div>
      </Wouter>
    </>
  );
}