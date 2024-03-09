import styles from './styles.module.scss'

export function SubscriptionForm(){
    return(
        <div className={styles.subscribeForm}>
        <h1 className={styles.subscribeFormTitle}>Here’s $10 Off* to Get You Started</h1>
        <p className={styles.formText}>Sign up for the Razer newsletter and enjoy $10 off your purchase.</p>
        <form action="post" id='subscribeButton'>
          <input type="email" id='emailInput' placeholder='Enter your E-mail address' />
          <button id='subscribeButton' className={styles.subscribeButton}>SUBSCRIPTION</button>
        </form>
        <p className={styles.formDisclaimer}>*Offer is valid with a minimum purchase of $99.</p>
    </div>
    )
}