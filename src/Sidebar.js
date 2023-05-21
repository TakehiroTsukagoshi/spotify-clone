import React from 'react'
import "./Sidebar.css"
import SidebarOptiojn from './SidebarOptiojn'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
      <SidebarOptiojn title="Home" Icon={HomeIcon} />
      <SidebarOptiojn title="Search" Icon={SearchIcon} />
      <SidebarOptiojn title="Your Library" Icon={LibraryMusicIcon} />

      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>

      {playlists?.items?.map((playlist) => (
        <SidebarOptiojn title={playlist.name} />
      ))}
      <SidebarOptiojn title="Hip hop" />
      <SidebarOptiojn title="Lock" />
      <SidebarOptiojn title="R&B" />

    </div>
  )
}

export default Sidebar
