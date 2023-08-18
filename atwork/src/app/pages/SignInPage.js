
import styles from "./SignInPage.module.scss"
// import { FaSignInAlt } from 'react-icons/fa';
function SignInPage() {
    return (
        <>
            
                <section className={styles.signincontainer}>
                    <h1>Please Login</h1>
                <section>
                    <form>
                        <div className={styles.name}>
                            <label>Emailadress</label>
                            <input type="email" id='name' name='name' placeholder='Enter your name' />
                        </div>
                    </form>
                    <form>
                        <div className={styles.name}>
                            <label>Password</label>
                            <input type="text" id='password' name='password' placeholder='Enter your password' />
                        </div>
                    </form>
                    <form>
                            <button type="btnlogin" className={styles.btnlogin}>Login</button>
                    </form>
                </section>
            </section>
        </>
    )

}

export default SignInPage;