
import { useAuth } from '../contexts/AuthContext'




// function extractNameFromEmail(e) {
//   // Split the email address into parts using "@" as a delimiter
//   const parts = e.split('@');

//   // If there are two parts (username and domain), attempt to extract the name
//   if (parts.length === 2) {
//     // Split the username using "." as a delimiter
//     const usernameParts = parts[0].split('.');

//     // If there are two parts in the username, assume the first part is the first name
//     if (usernameParts.length === 2) {
//       return usernameParts[0];
//     }
//   }

//   // If extraction fails, return an empty string or handle it as needed
//   return '';
// }

export default function DisplayGreets() {
    const {currentUser} = useAuth()

    let currentDate = new Date()
    currentDate = currentDate.getHours()
    let greeting = ''
        if(currentDate >=5 && currentDate < 12){
                greeting = 'Good Morning'
        }
        else if(currentDate >=12 && currentDate < 17){
                greeting = 'Good Afternoon'
        }
        else if(currentDate >=17 && currentDate < 21){
                greeting  = 'Good Evening'
        }
        else{
            greeting = 'Good Night'
        }

        // const [email, setEmail] = useState('');
        // const [name, setName] = useState('');
        // useEffect(()=>{
   
        //         const newName = extractNameFromEmail(currentUser =>{
        //                 setName(newName)
        //                 setEmail(currentUser.email)

        //         } )
        //         return name
        //     }, [])

        //     useEffect(()=>{
   
        //         const unsubscribe = auth.onAuthStateChanged(user =>{
        //             setLoading(false)
        //             setCurrentUser(user)
        //         })
        //         return unsubscribe
        //     }, [])

            
      
    


  return (
    <div>
      <h6> {greeting} , <strong>{currentUser.email} </strong> </h6> 
    </div>
  )
}
