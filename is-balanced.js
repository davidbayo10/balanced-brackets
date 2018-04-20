const OPENS = '{[(';
const CLOSES = '}])';
const BRACKETS = OPENS + CLOSES;

const MAP = {
  ')': '(',
  ']': '[',
  '}': '{'
};

module.exports = (str) => {
  if (!str && str.constructor === String) {
    return true;
  }

  if (BRACKETS.indexOf(str) > -1 && str.length % 2 === 0) {
    return true;
  }

  const stash = [];

  const fails = [...str]
    .filter((stringItem) => BRACKETS.indexOf(stringItem) > -1)
    .find((stringItem) => {
      if (OPENS.includes(stringItem)) {
        stash.push(stringItem);

        return false;
      }

      const openRef = stash.pop();

      return MAP[stringItem] !== openRef;
    });

  return (!fails && stash.length === 0);
};
