import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

class GenericHeader extends Component{

  render() {

    const headerStyle = {
      height: '56px',
      padding: '0.5rem',
      backgroundColor: '#343a40'
    }

    const navStyle = {
      alignItems: 'center'
    }

    const navName = {
      height: '34px'
    }

    const HeaderTitle = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    const HeaderIcon = styled('div')`
      display: inline-block;
    `

    const HeaderName = styled('div')`
      .router-link-main {
        padding: 0.5rem;
        padding-left: 0.25rem;
        height: 40px;
        font-size: 1.25rem ;
        color: #fff !important;
        text-decoration: none;
        margin-right: 5px;
      }
    `

    const HeaderEntry = styled('div')`
      .router-link {
        color: rgba(255, 255, 255, 0.5) !important;
        margin-right: 5px;
        margin-left: 5px;

        &:hover {
          color: rgba(255, 255, 255, 0.75) !important;
          text-decoration: none;
        }
      }
    `

    const { headerContent } = this.props

    return(
      <div style = {headerStyle}>
        <Nav style = {navStyle}>
          <NavItem>
            <HeaderTitle>
              <HeaderIcon>
                <img src={headerContent.icon} height='26' width='26'/>
              </HeaderIcon>
            </HeaderTitle>
          </NavItem>
          <NavItem style = {navName}>
            <HeaderName>
              <Link to="/" className='router-link-main'>{headerContent.name}</Link>
              </HeaderName>
          </NavItem>
          {
            headerContent ? headerContent.content.map(
              entry => {
                return (
                  <NavItem key={entry}>
                      <HeaderEntry>
                      <Link to={entry} className='router-link'>{entry}</Link>
                      </HeaderEntry>
                  </NavItem>
                )
              }
            ) : null
          }
        </Nav>
      </div>
    )
  }
}

export default connect(
  null, null
)(GenericHeader)
