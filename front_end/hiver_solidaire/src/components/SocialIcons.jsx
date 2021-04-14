import React from 'react';
import "../App.css";

function SocialIcons() {
    return (

        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1 rounded-circle "
                        style={{ backgroundCcolor: "#3b5998" }}
                        href="https://www.facebook.com/hiversolidaireparis/"
                        target="_blank"
                        role="button">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#55acee" }}
                        href="https://twitter.com/dioceseparis"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-twitter"></i>
                    </a>
                    <a
                        class="btn btn-primary btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: " #ac2bac" }}
                        href="https://www.instagram.com/dioceseparis/"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-instagram"></i></a>
                    <a
                        className="btn btn-primary btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/company/association-dioc-saine-de-paris/"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i></a>
                </section>
            </div>

            <div className="text-center p-3 " id='footerbar' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021 Copyright Hiver Solidaire
            </div>

        </footer>

    )
}
export default SocialIcons;