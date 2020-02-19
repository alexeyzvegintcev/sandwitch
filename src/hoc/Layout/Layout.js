import React from 'react'
import Aux from '../Aux/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component{
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedhandler = ()=> {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenhandler = ()=> {
        this.setState((prevState) => {return{showSideDrawer: !prevState.showSideDrawer}})
    }

    render(){
        return (
            <Aux>
               <Toolbar openMenu={this.sideDrawerOpenhandler} />
               <SideDrawer open={this.state.showSideDrawer} openMenu={this.sideDrawerOpenhandler} closed={this.sideDrawerClosedhandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 
export default Layout 