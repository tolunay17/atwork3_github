import styles from "./SignUpPage.module.scss"


function SignUpPage() {
    return (
        <>
            
                <section className={styles.signupcontainer}>
                    <h1>Please Signin</h1>
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
                        <form>
                        <div className={styles.name}>
                            <label>Confirm Password</label>
                            <input type="text" id='password' name='password' placeholder='Enter your password' />
                        </div>
                    </form>
                    </form>
                    <form>
                            <button type="btnlogin" className={styles.btnlogin}>Sign up</button>
                    </form>
                </section>
            </section>
        </>
    )
}
export default SignUpPage;