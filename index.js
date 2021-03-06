let user = {
  firstname: "",
  lastname: "",
};

const template = `
    <div class="form-wrapper">
      <div class="card-wrapper">
        <div class="close">
          <button class="close-btn" onclick="closeModal()">X</button>
        </div>

        <form class="form-body" onsubmit="handleSubmit(event)">
          <div class="inps">
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              onchange="handleChange(event)"
            />
          </div>

          <div class="inps">
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              onchange="handleChange(event)"
            />
          </div>

          <div class="error-body"></div>

          <div class="inps">
            <button type="submit">Greeet</button>
          </div>
        </form>

        <p class="footer-message">Built by Emmanuel Toluwanimi</p>
      </div>
    </div>
  `;

const $ = window.document.querySelector.bind(document);

const init = () => {
  if (!$(".form-wrapper")) {
    $("body").innerHTML += template;
  }

  $(".form-wrapper").style.display = "block";

};

function initiateModal() {
  $(".form-wrapper").style.display = "block";
}

function closeModal() {
  $(".form-wrapper").style.display = "none";
}

function handleErrorMessage(msg) {
  $(".error-body").innerText = msg;
  $(".error-body").style.display = "block";

  setTimeout(() => {
    $(".error-body").innerText = "";
    $(".error-body").style.display = "none";
  }, 2000);
}

function handleChange(e) {
  user = {
    ...user,
    [e.target.name]: e.target.value,
  };
}

function handleSubmit(event) {
  event.preventDefault();
  $(".form-body").preventDefault();

  const { firstname, lastname } = user;

  if (!firstname || !lastname) {
    handleErrorMessage("Please enter required values");
    return;
  }

  alert(`Hello Dev ${lastname} ${firstname}`);

  $(".form-body").reset();
}

const Greeet = {
  init,
};

if (typeof exports != "undefined") {
  exports.Greeet;
}
