import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.scss';
import Dashboard from '../Dashboard/Dashboard';
import MainContent from '../MainContent/MainContent';
const SidebarMenu = () => {
    let sidebarobj = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    let menuItems = [
        {
            text: 'Overview',
            iconCss: 'icon-user icon',
            items: [
                { text: 'All Data' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Notification',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Message' },
                { text: 'Facebook' },
                { text: 'Twitter' }
            ]
        },
        {
            text: 'Comments',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [
                { text: 'Category1' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Bookmarks',
            iconCss: 'icon-bookmark icon',
            items: [
                { text: 'All Comments' },
                { text: 'Add Comments' },
                { text: 'Delete Comments' }
            ]
        },
        {
            text: 'Images',
            iconCss: 'icon-picture icon',
            items: [
                { text: 'Add Name' },
                { text: 'Add Mobile Number' }
            ]
        },
        {
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile User' },
                { text: 'Laptop User' },
                { text: 'Desktop User' }
            ]
        },
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        }
    ];
    const enableDock = true;
    const dockSize = '50px';
    const width = '220px';
    const target = '.main-menu-content';
    let folderEle = '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';
    const toolbarCliked = (args) => {
        if (args.item.tooltipText == "Menu") {
            sidebarobj.current.toggle();
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    return (<div id="menu-wrapper" className="control-section">
            <div id="sidebarmenu">
                {/* header-section  declaration */}
                <div>
                    <ToolbarComponent id="menuToolbar" clicked={toolbarCliked.bind(this)}>
                        <ItemsDirective>
                            <ItemDirective prefixIcon="icon-menu" tooltipText="Menu"></ItemDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
                {/* main content declaration */}
                <div className="main-menu-content" id="maintext">
                   <MainContent isOpen={isSidebarOpen}/>
                </div>
                {/* end of main content declaration
        sidebar element declaration */}
                <SidebarComponent id="menuSidebar" className="sidebar-menu" ref={sidebarobj} enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={true} type="Auto">
                        <div className="main-menu">
                            <div>
                                <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu'></MenuComponent>
                            </div>
                        </div>
                </SidebarComponent>
            </div>
        </div>);
};
export default SidebarMenu;