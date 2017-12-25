import React,{Component} from 'react'

class Subscriptions extends Component{

    constructor(props){
        super(props);

        this.state={
            email:''
        }
    }

    saveSubscription=(email)=>{
        const URL_EMAIL="http://localhost:3004/subscription"

        fetch(URL_EMAIL,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({email})
        }).then(response=>response.json())
          .then(()=>{
                this.setState({
                    email:''
                })
           })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let email=this.state.email;
        let regex=/\$+@\$+\.\$+/;

        if(regex.test(email)){
            this.saveSubscription(email);
        }else{
            
        }
    }

    onChangeInput=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    render(){
        return(
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                        placeholder="youremail@email.com"
                        value={this.state.email}
                        onChange={this.onChangeInput}/>
                    </form>
                </div>
                <small>
                    something awesome is written here.
                    Assume this.
                </small>
            </div>
        )
    }
}
export default Subscriptions;