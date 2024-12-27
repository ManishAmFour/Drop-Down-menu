let DropList = [];
let TrueValue = true;

function EnterTheDetails(DropDownName, EnterButton) {
  document.querySelector(`.enter-button`).addEventListener(`click`, () => {
    let NewDropList = document.createElement(`div`);
    let InputList = document.createElement("input");
    let EnterList = document.createElement("button");
    EnterList.classList.add(`enter-list-button`);
    EnterList.dataset.projectName = ``;
    InputList.type = "number";
    EnterList.innerText = "Enter";

    NewDropList.classList.add(`drop-div`);
    NewDropList.innerHTML = `<div class="project-${DropDownName.value}">${DropDownName.value}</div>`;
    let PushedObject = DropDownName.value;
    document.body.appendChild(NewDropList);

    DropList.push({ PushedObject });

    document.querySelector(`.major-list`).removeChild(DropDownName);
    document.querySelector(`.major-list`).removeChild(EnterButton);

    document.querySelectorAll(`.drop-div`).forEach((div) => {
      div.addEventListener(`click`, () => {
        CreateTheDropDown(div, InputList, EnterList);
      });
    });
  });
}

function CreateTheDropDown(div, InputList, EnterList) {
  if (!div.contains(InputList)) {
    EnterList.dataset.projectName = `${div.innerText}`;
    InputList.dataset.projectName = `${div.innerText}`;
    div.appendChild(InputList);
    div.appendChild(EnterList);
    NameTheDropDown(div, EnterList, InputList);
  }
}

function NameTheDropDown(div, EnterList, InputList) {
  EnterList.addEventListener("click", () => {
    DropList.forEach((element) => {
      if (EnterList.dataset.projectName === element.PushedObject) {
        for (let index = 0; index < InputList.value; index++) {
          let NewInputList = document.createElement("input");
          NewInputList.classList.add("newly-input");
          NewInputList.dataset.projectName = `${InputList.dataset.projectName}`;
          div.appendChild(NewInputList);
        }
      }
    });

    div.removeChild(EnterList);
    InputList.classList.add("display-none");

    let ListEnterButton = document.createElement("button");
    ListEnterButton.classList.add("list-enter-button");
    ListEnterButton.innerText = "Enter";
    ListEnterButton.dataset.elementName = `${div.innerText}`;
    div.appendChild(ListEnterButton);

    ListEnterFunction(div, EnterList);
  });
}

function ListEnterFunction(div, EnterList) {
  document.querySelectorAll(".list-enter-button").forEach((smallDiv) => {
    smallDiv.addEventListener("click", () => {
      document.querySelectorAll(".newly-input").forEach((element) => {
        if (element.dataset.projectName === smallDiv.dataset.elementName) {
          let CreatedDiv = document.createElement("div");
          CreatedDiv.classList.add("list-display");
          CreatedDiv.dataset.projectName = `${smallDiv.dataset.elementName}`;
          CreatedDiv.classList.add("display-none");
          CreatedDiv.innerText = `${element.value}`;
          div.appendChild(CreatedDiv);
          element.classList.add("display-none");
          TrueValue = false;
        }
      });
      let DropDownicon = document.createElement("img");
      DropDownicon.classList.add("img-drop");
      DropDownicon.src = "dropdown.png";
      DropDownicon.dataset.projectName = `${smallDiv.dataset.elementName}`;

      div.appendChild(DropDownicon);

      PortryingTheList(DropDownicon);

      div.removeChild(smallDiv);
    });
  });
}

function PortryingTheList(DropDownicon) {
  DropDownicon.addEventListener("click", () => {
    document.querySelectorAll(".list-display").forEach((input) => {
      if (input.dataset.projectName === DropDownicon.dataset.projectName) {
        if (input.classList.contains("display-none")) {
          input.classList.remove("display-none");
        } else {
          input.classList.add("display-none");
        }
      }
    });
  });
}

document.querySelector(`.create-button`).addEventListener(`click`, () => {
  let DropDownName = document.createElement(`input`);
  DropDownName.maxLength = 10;
  DropDownName.classList.add(`default-button`);
  DropDownName.classList.add(`drop-list`);
  document.querySelector(`.major-list`).appendChild(DropDownName);

  let EnterButton = document.createElement(`button`);
  EnterButton.classList.add(`enter-button`);
  EnterButton.classList.add(`default-button`);
  EnterButton.innerText = `Enter`;
  document.querySelector(`.major-list`).appendChild(EnterButton);
  EnterTheDetails(DropDownName, EnterButton);
});
