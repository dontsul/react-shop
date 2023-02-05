const Header = () => {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper container">
                <a href="#!" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/dontsul/movies"
                            target="_blanc"
                            className="link-repo"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Header };
