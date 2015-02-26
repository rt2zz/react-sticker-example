console.log('hi')
var React = require('react')
var domready = require('domready')

var Sticker = require('react-sticker')
var Sticky = Sticker.Sticky

var ContentBlock = React.createClass({
  render: function(){
    var header = <Sticky useDocumentScroll={true}><h2 style={{background:'#ddd'}}>Header {this.props.n}</h2></Sticky>

    var contentRows = []
    for(var i = 0; i < this.props.n; i++){
      contentRows.push(<div>{Math.random()}<br /></div>)
    }

    return (
      <div>
        {header}
        {contentRows.map( (row) => {return row} )}
      </div>
    )
  }
})

var Content = React.createClass({
  render: function() {
    var columnStyle = {
      float: 'left',
      width: '50%',
      marginTop: 0
    }
    var scrollStyle = {
      overflow: 'scroll',
      height: '100%'
    }
    return (
      <div>
        <div style={columnStyle}>
          <Sticker useWindow={true}>
            <ContentBlock n={12} />
            <ContentBlock n={2} />
            <ContentBlock n={8} />
            <ContentBlock n={12} />
            <ContentBlock n={12} />
            <ContentBlock n={20} />
            <ContentBlock n={12} />
            <ContentBlock n={18} />
            <ContentBlock n={12} />
            <ContentBlock n={12} />
          </Sticker>
        </div>
        <div style={columnStyle}>
          <div style={{overflow:'hidden'}}>
            <Sticker style={scrollStyle} useWindow={false}>
              <ContentBlock n={12} />
              <ContentBlock n={2} />
              <ContentBlock n={8} />
              <ContentBlock n={12} />
              <ContentBlock n={12} />
              <ContentBlock n={20} />
              <ContentBlock n={12} />
              <ContentBlock n={18} />
              <ContentBlock n={12} />
              <ContentBlock n={12} />
            </Sticker>
          </div>
        </div>
      </div>
    );
  }
})

domready(() => {
  React.render(
    <Content />,
    document.body
  );
})
