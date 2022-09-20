import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactoPage = () => {
    return (
        <>
            <div className='pastel_centrado'>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="password" placeholder=" " />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>
            </div>
        </>
    )
}
export default ContactoPage;