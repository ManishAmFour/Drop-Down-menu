let DropList = [];

function EnterTheDetails(DropDownName, EnterButton) {
  document.querySelector(`.enter-button`).addEventListener(`click`, () => {
    let NewDropList = document.createElement(`div`);
    let InputList = document.createElement("input");
    let EnterList = document.createElement("button");
    EnterList.classList.add(`enter-list-button`);
    InputList.type = "number";
    EnterList.innerText = "Enter";

    NewDropList.classList.add(`drop-div`);
    NewDropList.innerText = `${DropDownName.value}`;
    let PushedObject = DropDownName.value;
    document.body.appendChild(NewDropList);

    DropList.push({ PushedObject, Array: [] });

    console.log(DropList);

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
    div.appendChild(InputList);
    div.appendChild(EnterList);
    NameTheDropDown(div, EnterList, InputList);
  }
}

function NameTheDropDown(div, EnterList, InputList) {
  EnterList.addEventListener("click", () => {
    for (let index = 0; index < InputList.value; index++) {
      let ListElement = document.createElement(`input`);

      ListElement.classList.add(`input-names`);
      div.appendChild(ListElement);
    }

    let ListEnterButton = document.createElement("button");
    ListEnterButton.classList.add("list-enter-button");
    ListEnterButton.innerText = "Enter";
    ListEnterButton.dataset.elementName = `${div.innerText}`;
    div.appendChild(ListEnterButton);

    div.removeChild(EnterList);
    InputList.classList.add("display-none");

    ListEnterFunction();
  });
}

function ListEnterFunction() {
  document.querySelectorAll(".list-enter-button").forEach((div) => {
    DropList.forEach((value) => {
      //if(value.PushedObject === ){}
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
