import './styles.css';
export default function Footer() {
    return (
        <footer className="footer">
            <h3>Trabajo Integrador Final</h3>
            <p>Realizado por los integrantes del grupo 2</p>
            
            <div className="github">
                <p>Puedes visitar el repositorio de GitHub</p>
                <a href="https://github.com/francodessana/AP56G2"><img className="imgGit" src="https://img.icons8.com/ios-filled/344/github.png" alt="github"/></a>   
            </div>
            <div className="redes">
                <a href="https://www.facebook.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAV1BMVEU6VZ////84U572+PtBW6IqSpqstdP7/P0uTJufqswzUJ15iLm2vtceQpfc4e7R1uZSaalsfrRgdK7n6vKJl8FHYKTFzOAkRpkQPJXu8Pa9xNuAj76bpcnub7oxAAABMUlEQVRoge3W23LCIBCAYbMBSYg5EKuptu//nO2NchBGXJZO29n/lpnPGZANux3HcdzvC7QbELqyE4sZnFYqXUtzODZ+V0lED6H83YEE75bpkSbCN9PGbBJcvkVpElybhE2Awym+JyT4dk7Z5bhek3Y5vs31cBBpuxjXqb8hBR45TjXd6rsyfAxHymTex1ul5ykDfOp0oejm3yC1ENogfHymmeBxnGaCJ/A944z/HxzuPeJ2DfWYA2ELvs577awJDC5aZfPsRrk1w+tTLNyKdMvrG5ONt4jxm41ftor4XBO/1sR7xI3Kxj9qHuhaEz8h7n8ufsHMllz8iJmQufgZh6vncoN8w4D47G3+D83OkkG97KC7JyGY56NdK341/rlvKOOMM84444wzzjjjjDP+A/gXASEUXDdy9qcAAAAASUVORK5CYII=" alt="" /></a>
                <a href="https://www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="" /></a>
                <a href="https://twitter.com"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="" /></a>
            </div>

            <p>Copyright 2023</p>
        </footer>
    );
}