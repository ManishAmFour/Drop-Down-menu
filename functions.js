function EnterTheDetails(DropDownName, MenuNumber, EnterButton) {
  document.querySelector(`.enter-button`).addEventListener(`click`, () => {
    if (MenuNumber.value < 6) {
      let NumberList = MenuNumber.value;
      let NewDropList = document.createElement(`div`);
      NewDropList.innerText = `${DropDownName.value}`;
      document.body.appendChild(NewDropList);
      CreatingList(NumberList);

      document.querySelector(`.major-list`).removeChild(DropDownName);
      document.querySelector(`.major-list`).removeChild(MenuNumber);
      document.querySelector(`.major-list`).removeChild(EnterButton);
    } else {
      document.querySelector(`.major-list`).removeChild(DropDownName);
      document.querySelector(`.major-list`).removeChild(MenuNumber);
      document.querySelector(`.major-list`).removeChild(EnterButton);
    }
  });
}

function CreatingList(NumberList) {
  for (let index = 0; index < NumberList; index++) {
    let ListElement = document.createElement(`input`);
    ListElement.classList.add(`input-names`);
    document.body.appendChild(ListElement);
  }
  let EnterListButton = document.createElement(`button`);
  EnterListButton.innerText = `Enter`;
  EnterListButton.classList.add(`enter-list`);
  document.body.append(EnterListButton);

  document.querySelector(`.enter-list`).addEventListener(`click`, () => {
    InitializingListNumber();
  });
}

function InitializingListNumber() {
  document.querySelectorAll(`.input-names`).forEach((div) => {
    console.log(div.value);
  });
}

document.querySelector(`.create-button`).addEventListener(`click`, () => {
  let DropDownName = document.createElement(`input`);
  DropDownName.maxLength = 10;
  DropDownName.classList.add(`default-button`);
  DropDownName.classList.add(`drop-list`);
  document.querySelector(`.major-list`).appendChild(DropDownName);
  let MenuNumber = document.createElement(`input`);
  MenuNumber.type = "number";
  MenuNumber.classList.add(`default-button`);
  MenuNumber.classList.add(`menu-list`);
  document.querySelector(`.major-list`).appendChild(MenuNumber);
  let EnterButton = document.createElement(`button`);
  EnterButton.classList.add(`enter-button`);
  EnterButton.classList.add(`default-button`);
  EnterButton.innerText = `Enter`;
  document.querySelector(`.major-list`).appendChild(EnterButton);
  EnterTheDetails(DropDownName, MenuNumber, EnterButton);
});
