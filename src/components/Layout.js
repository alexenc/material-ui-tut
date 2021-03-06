import { Drawer, makeStyles, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons"
import { useHistory, useLocation } from "react-router-dom"


const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
        
    },
    drawerPaper: {
        width: drawerWidth,        
    },
    root: {
        display: "flex"
    },
    active: {
        backgroundColor: '#f4f4f4'
    }
})

export default function Layout({children}) {

    const history = useHistory()
    const location = useLocation()

    const classes = useStyles()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }

    ]

    return (
        <div className={classes.root}>
            
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5"> Ninja notes </Typography>
                </div>

                <List>
                    {menuItems.map(menuItem => (
                        <ListItem 
                            key={menuItem.text} 
                            button onClick={() => history.push(menuItem.path)} 
                            className={location.pathname == menuItem.path ? classes.active : null}
                        > 
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.text} />
                        </ListItem>
                    ))}
                </List>
                
            </Drawer>            

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
