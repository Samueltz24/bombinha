import styles from './Estilo.module.css'
function Ford(){
    return(
        <>
            <footer>
                <div className={styles.pai}>
                    <div className={styles.filho}>
                        <p>site criado por samuel tz</p>
                    </div>
                    <div className={styles.filho}>
                      <p><a className={styles.link} href="https://github.com/Samueltz24?tab=repositories">github</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Ford 