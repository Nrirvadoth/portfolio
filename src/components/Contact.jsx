function ContactForm() {
  return (
    <form
      action="mailto:mathurin.malandain@gmail.com"
      method="post"
      enctype="text/plain"
    >
      <label for="name">Votre nom :</label>
      <input type="text" name="name" placeholder="Votre nom" required/>
      <label for="name">Votre email :</label>
      <input type="email" name="email" placeholder="Votre email" required/>
      <label for="object">Objet :</label>
      <input type="text" name="object" placeholder="Objet" required/>
      <label for="content">Votre message :</label>
      <textarea name="content" rows="5" placeholder="Message" required/>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
