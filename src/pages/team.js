import jsonteam from '../teamprofile.json';

function Team(){
    const team = jsonteam.teamprofile;
    return(
        <div>
                           
                {team.map((team, index)=>(
                    <div key={index} className='profileCard'>
                        <main className='profileImage'>
                            <img src={team.image} alt='profile' />
                        </main>
                        <div className='profile'>
                            <h1>{team.name}</h1>
                            <h6>{team.position}</h6>
                            <p>{team.profile}</p>
                        </div>

                    </div>
                
                ))}
                
            
        
        </div>
    )
}
export default Team;