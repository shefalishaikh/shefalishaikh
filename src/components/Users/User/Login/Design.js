import React from 'react';
import {View,Image, ScrollView,} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import { styles } from "./styles";
import strings from '../../../../res/strings';
import images from '../../../../res/images';

const UserLoginDesign = () => {
    return(
        <View style={styles.mainContainer}>  
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.headerView}>
                        <Text style={styles.headingText}>{strings.users.welcome_admin}</Text>
                    </View>
                    <View style={styles.loginView}>
                        <View style={styles.cardView}>
                            <View style={styles.cardIcon}>
                                <Image source={images.onboarding.user_admin}
                                    style={styles.cardImage} />
                            </View>
                            <View style={styles.spacing25}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="email"
                                    label={strings.textInput.email}
                                    mode="outlined"
                                    placeholder={strings.textInput.email}
                                    blurOnSubmit={true}
                                    autoCapitalize='none'
                                    // autoFocus
                                    keyboardType="email-address"
                                    // error={isErrorEmail}
                                    // value={email}
                                    // onChangeText={ (text) => { setEmail(text); validateEmailId(text); } }
                                    left={ <TextInput.Icon name="email" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing15}></View>
                            <View>
                                <TextInput
                                        autoCompleteType="password"
                                        label={strings.textInput.password}
                                        mode="outlined"
                                        placeholder={strings.textInput.password}
                                        blurOnSubmit={true}
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        textContentType={'password'}
                                        multiline={false}
                                        error={false}
                                        // value={pass}
                                        onChangeText={ (text) => {} }
                                        left={ <TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                        right={ <TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={ () => {} } />}
                                    />
                                    <HelperText type="info" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing25}></View>
                            <View style={styles.submitButton} >
                                <Button 
                                    style={styles.loginButton}
                                    icon="login"
                                    mode="contained"
                                    onPress={ () => {} }
                                    >
                                    LOGIN
                                </Button>
                            </View>
                            <View style={styles.newAcc}>
                                <View style={styles.spacing15}></View>
                                <Text style={styles.newAccText}>Don't have an account? Create one new</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerView}>{strings.footer.powered_by}</Text>
                <View style={styles.logoContainer}>
                    <Image source={images.college.logo_square}  
                    style={styles.logoContent} /> 
                </View>
            </View>
        </View>
    );
}
export default UserLoginDesign;