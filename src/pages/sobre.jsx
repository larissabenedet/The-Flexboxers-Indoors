import styles from "../styles/pages/Sobre.module.scss";
import Head from "next/head";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Indoors - Sobre</title>
            </Head>
            <main>
                <h1>Sobre a equipe: The Flexboxers</h1>

                <section>
                    <div>
                        <h2>Larissa Benedet</h2>
                        <p>
                            Técnica em desenvolvimento de sistemas, estuda sobre
                            o mundo do desenvolvimento web, principalmente
                            Front-end, e está em busca de novas oportunidades
                            profissionais para evoluir cada dia mais.
                        </p>
                        <span>Tecnologias: Next.js, Sass </span>
                        <a
                            href="https://github.com/larissabenedet"
                            target="blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://linkedin.com/in/larissa-v-benedet/"
                            target="blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <img
                        src="https://github.com/larissabenedet.png"
                        alt="Larissa Benedet"
                        className={styles.right}
                    />
                </section>
                <section>
                    <img
                        src="https://github.com/Kaue-G.png"
                        alt="Kauê Guedes"
                        className={styles.left}
                    />
                    <div>
                        <h2>Kauê Guedes</h2>
                        <p>
                            Graduado em Engenharia de software(UFC) e em Ciência
                            da Computação (IFCE), é aberto a desafios, mantém a
                            busca diária por novos conhecimentos e por
                            diferentes percepções, é apaixonado por tecnologia e
                            engenharia de software.
                        </p>
                        <span>Tecnologias: Next.js, Node.js</span>
                        <a href="https://github.com/Kaue-G" target="blank">
                            Github
                        </a>
                        <a
                            href="https://linkedin.com/in/kauê-guedes-dev"
                            target="blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>João Vitor Martins Neto</h2>
                        <p>
                            Cursando Física, é apaixonado por ciência e
                            tecnologia e sempre busca uma forma para continuar a
                            aprender e a melhorar individualmente.
                        </p>
                        <span>
                            Tecnologias: Node.js, Express, Sequelize, MySQL,
                            MongoDB, Socket.io, Next.js
                        </span>
                        <a href="https://github.com/Joao-1" target="blank">
                            Github
                        </a>
                        <a
                            href="https://linkedin.com/in/joão-vitor-martins-neto-a44398206
"
                            target="blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <img
                        src="https://github.com/Joao-1.png"
                        alt="João Vitor Martins Neto"
                        className={styles.right}
                    />
                </section>
                <section>
                    <img
                        src="https://github.com/joevtap.png"
                        alt="Joel Vitor Torres"
                        className={styles.left}
                    />
                    <div>
                        <h2>Joel Vítor Torres</h2>
                        <p>
                            Entusiasmado com ciência e tecnologia, começou a
                            programar aos 16 anos e desde então decidiu que
                            viveria disso. Gosta de desafios, é comunicativo e
                            acredita que com esforço tudo é possível.
                        </p>
                        <span>Tecnologias: Next.js, Node.js, Sass</span>
                        <a href="https://github.com/joevtap" target="blank">
                            Github
                        </a>
                        <a
                            href="https://linkedin.com/in/joevtap"
                            target="blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
