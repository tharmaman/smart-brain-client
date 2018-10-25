import React from 'react';

class Rank extends React.Component {
    state = {
      emoji: ''
    }

    componentDidMount(){
      this.generateEmoji(this.props.entries)
    }

    // updates when props or emoji changes
    componentDidUpdate(prevProps, prevState){
      if (prevProps.entries === this.props.entries && prevProps.name === this.props.name){
        return null;
      }
      this.generateEmoji(this.props.entries);
    }

    generateEmoji = (entries) => {
      fetch(`https://mm3ni7b68h.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(response => response.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.error);
    }

    render() {
        const { emoji } = this.state;
        const {name, entries} = this.props;
        return (
            <div>
                <div className="white f3">
                    {`${name}, your current entry count is...`}
                </div>
                <div className="white f1">{entries}</div>
                <div className="white f3">{`Rank Badge: ${emoji}`}</div>
            </div>
        );
    }
}

export default Rank;
