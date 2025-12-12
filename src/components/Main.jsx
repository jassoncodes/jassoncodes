import { Dropdown } from './Dropdown'
import { Logo } from './logo'

export const Main = () =>
{
    return (
        <main>
            <hero>
                <Logo />
            </hero>
            <section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus accusamus in ipsum atque error eveniet repudiandae quidem, ad nisi molestias, blanditiis odit voluptatem? Ex corporis rem nesciunt velit iusto?</p>
            </section>
            <Dropdown />
        </main>
    )
}
