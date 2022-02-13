import React from "react";
import "./Sidebar.css";

import {Avatar, IconButton} from "@mui/material";
import {DonutLarge, SearchOutlined, WhatsApp} from "@mui/icons-material";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {OutlinedInput} from '@mui/material';
import {SidebarChat,SidebarChat2, SidebarChat3, SidebarChat4, SidebarChat5, SidebarChat6, SidebarChat7, SidebarChat8, SidebarChat9 } from "./SidebarChat";



function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <Avatar src="https://i.pinimg.com/originals/01/b1/05/01b10579a1639244d3abd693f49add84.jpg"/>
                    <IconButton className="tooltip">
                        <span className="tooltipText">Refresh</span>
                        <DonutLarge color="primary"/>
                    </IconButton>
                    <IconButton className="tooltip">
                    <span className="tooltipText">New Chat</span>
                        <ChatRoundedIcon color="primary"/>
                    </IconButton>
                    <IconButton className="tooltip">
                    <span className="tooltipText">More information </span>
                        <MoreVertIcon color="primary"/>
                    </IconButton>
                    <h3 className="whtsp">WhatsApp</h3>
                    <IconButton>
                        <WhatsApp  style={{fill: "#83ec52"}}/>
                    </IconButton>

                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start a new conversation" type="text"/>

                </div>
            </div>
            <div className="sidebar__chats">
           <SidebarChat/>
           <SidebarChat2/>
           <SidebarChat3/>
           <SidebarChat4/>
           <SidebarChat5/>
           <SidebarChat6/>
           <SidebarChat7/>
           <SidebarChat8/>
           <SidebarChat9/>

            </div>
        </div>
    )
}
export default Sidebar;
