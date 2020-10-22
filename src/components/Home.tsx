import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


interface IState {
    consumer: any;
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { consumer: {} }
    }

     public componentDidMount(): void {
     fetch("https://p9dev.becour.com/api/serverscript/consumerscripts/getConsumerInfo")
        .then((response) => {
           return response.json();
        })
       .then(data => {
         //console.log(JSON.parse(JSON.stringify(data)));  
         // console.log(JSON.parse(JSON.stringify(data.countryCodes)));
         debugger;
         this.setState({ consumer: data.consumer });
         console.log(JSON.parse(JSON.stringify(this.state.consumer)));
        }).catch(error => {
          console.log(error);
       });
    }   


    

    public render() {
        const consumer = this.state.consumer;
        return (
            <main className="Home">
            <div>
                {consumer.length === 0 && (
                    <div className="text-center">
                        <h2>No consumer found at the moment</h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                      Welcome {consumer.consumer}
                    </div>
                </div>
            </div>
            </main>
        )
    }
}
