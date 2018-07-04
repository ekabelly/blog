export const changeY = top =>window.scrollTo({
      top:top,
      left:0,
      behavior:'smooth'
    });

export const validateInputs = content =>{
	for (let i = 0 ; i < content.length; i++) {
		if (content[i].trim() !== '' && content[i] !== null & content[i] !== undefined) {
			return true;
		}
		return false;
	}
}