import React, {useEffect} from 'react';
import UserSignupDesign from './Design';

const UserSignupActivity = ({navigation}) => {
    return(
        <UserSignupDesign
        navigation={navigation}
     
        isValidationName={(fullName)=>isValidationName(fullName)}/>
    );
    function isValidationName(fullName)
    {
        if(!fullName){
            setErrorFirstName(true);
            setErrorFirstNameText('First Name is required.');
            setIsErrorFirstName(true);
            return false;
        }
        else{
            setErrorFirstName(false);
            setErrorFirstNameText('');
            setIsErrorFirstName(false);
        }
        setErrorFirstName(false);
        setErrorFirstNameText('');
        setIsErrorFirstName(false);
        return true;
    }
}
export default UserSignupActivity;