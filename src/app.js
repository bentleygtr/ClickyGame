import React, { Component } from 'react';
import './App.css';
import Pics from './Pics.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import PicCard from './components/PicCard/PicCard'


class App extends Component {
    state = {
        message: "",
        topScore: 0,
        curScore: 0,
        Pics: Pics,
        unselectedPics: Pics
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPic = cover => {
        const findPic = this.state.unselectedPics.find(item => item.cover === cover);

        if(findPic === undefined) {
            //Picked an already selected Pic 
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                Pics: Pics,
                unselectedPics: Pics
            });
        }
        else {
            //Picked an undelected Pic
            const newPics = this.state.unselectedPics.filter(item => item.cover !== cover);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                Pics: Pics,
                unselectedPics: newPics
            });
        }

        this.shuffleArray(Pics);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.Pics.map(Pic => (
                        <PicCard
                            cover={Pic.cover}
                            image={Pic.image}
                            selectPic={this.selectPic} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;