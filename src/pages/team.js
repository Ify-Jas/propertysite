import jsonteam from '../teamprofile.json';
import Header from "../components/header";
import pic1 from '../images/logofinal.png'
import pic2 from '../images/Profilepic.jpg';



function Team(){
    const team = jsonteam.teamprofile;
    return(
        <div className='profileContainer'>
            <Header />
                           
                {team.map((team, index)=>(
                    <div key={index} className='profileCard'>
                        <main className='profileImageContainer'>
                            <img className='profileImage' src='https://api.lorem.space/image/fashion?w=150&h=150' alt='profile' />
                        </main>
                        <div className='profile'>
                            <h1>{team.name}</h1>
                            <h6>{team.position}</h6>
                            <div className='profileLine'></div>
                            <p>{team.profile}</p>
                        </div>

                    </div>
                
                ))}
                
            
        
        </div>
    )
}
export default Team;