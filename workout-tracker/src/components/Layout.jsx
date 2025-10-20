
export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The JBGram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Builty by <a href="https://x.com/JasonBotterill3" target="_blank">JB</a>
                <br/>Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a>
            </p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}