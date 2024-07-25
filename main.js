const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.header__button');

navigation.classList.add('navigation--closed');

toggle.addEventListener('click', () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
	navigation.classList.add('navigation--closed');
	navigation.classList.remove('navigation--opened');
  }
});


