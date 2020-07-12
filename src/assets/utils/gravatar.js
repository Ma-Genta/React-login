import Md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (email).trim().toLowerCase();
  const hash = Md5(formattedEmail, { encoding: "binary" });
  return `${base}${hash}`
};

export default gravatar;