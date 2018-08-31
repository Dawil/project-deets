import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SuffixPanelEntry from '../SuffixPanelEntry'
import LoadingSquares from '../LoadingSquares'
import { selectProject } from '../../actions.js'

class SuffixPanel extends Component{

  constructor(){
    super()
    this.state = {
      selected: null,
      loading: true,
      loadPhase: 0
    }
  }

  fillBlanks = (currentRows) => {
    let blankArray = []
    let rowsToFill = 20 - currentRows
    if (rowsToFill < 0) {
      rowsToFill = 0
    }
    for (var i = 0; i < rowsToFill; i++) {
      blankArray.push('a');
    }
    return blankArray
  }

  render() {

    const { searchData, text, searchStatus } = this.props

    const mainStyle = {
      display: 'block',
      height: '100%',
      align: 'top'
    }

    const blankEntryStyle = [
      {
        backgroundColor: 'rgb(52, 58, 64, 0.5)',
        height: '20px',
      },
      {
        backgroundColor: 'rgb(33, 37, 41, 0.5)',
        height: '20px',
      },
    ]

    const DivWithHover = styled('div')`
      cursor: pointer;
      width: 80%;
      height:  20px;
      display: inline-block;
      color: rgb(255, 255, 255, 0.5);

      &:hover {
        color: rgba(255, 255, 255, 0.75) !important;
        text-decoration: none;
      }
    `

    const placeHolderStyle = {
      width:'100%',
      height: '20px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)'
    }

    const AnimatedBorder = styled('div')`
      border: ${ searchStatus ? '1px solid #fff;' : '0px solid #fff;'}
      border-radius: 25px;
      width: 460px;
      height: ${this.props.xzibitProps};
      text-align : center;
      vertical-align: top;
      overflow-x: hidden;
      overflow-y: scroll;
      box-sizing: content-box;

        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 1s linear forwards;
        @keyframes fadeinout {
          0%,100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fadein {
          0% { opacity: 0; }
          50% { opacity: 1; }
        }
    `
    //animation: ${text == 'Record your message' ? 'fadein 3s linear forwards;' : 'fadeinout 3s linear forwards;'}

    const loadingContainer = {
      height: '100%'
    }

    const loadingSpacerStyle = {
      height: 'calc(50% - 20px)'
    }

    const loadingContentStyle = {
      height: '20px',
      width: '100%',
      display: 'inline-block'
    }

    const loadingContentSpacerStyle = {
      height: '100%',
      width: '40%',
      display: 'inline-block'
    }

    const loadingSquare = {
      border: '1px solid #fff',
      display: 'table',
      margin: 'auto',
      verticalAlign: 'middle',
      height: '20px',
      width: '20px'
    }

    return(
      <div style = {mainStyle}>
      <AnimatedBorder className='noscroll'>
          {
            searchStatus == 'searched' ?
              searchData.value[0].Jobs.map((job, index) =>
                <div key={job.JobSuffix + 'container'} className='loadedContent'>
                <SuffixPanelEntry key={job.JobSuffix} index={index} job={job} />
                </div>
              )
            : null
          }
          {
            searchStatus == 'searched' ?
              this.fillBlanks(searchData.value[0].Jobs.length).map((item, index) =>
                <div key={index+'outer'} style={blankEntryStyle[index % blankEntryStyle.length]} className='loadedContent'>
                  <div key={index+'inner'} style={placeHolderStyle}></div>
                </div>
              )
            : null
          }
          {
            searchStatus == 'searching' ?
              <div style={loadingContainer}>
                <div style={loadingSpacerStyle}></div>
                <div style={loadingContentStyle}>
                  <div style={loadingContentSpacerStyle} />
                    <LoadingSquares start={(searchStatus == 'searching')} />
                  <div style={loadingContentSpacerStyle} />
                </div>
                <div style={loadingSpacerStyle}></div>
              </div>
            : null
          }
      </AnimatedBorder>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchData: state.MainReducer.searchData,
    searchStatus: state.MainReducer.searchStatus
  }),
  {
    selectProject
  }
)(SuffixPanel)
