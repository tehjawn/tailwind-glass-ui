const path_aliases = (prefix = `src`) => ({
  "@": `${prefix}/`,
  "@components": `${prefix}/components/`,
  "@styles": `${prefix}/styles/`,
  "@utils": `${prefix}/utils/`,
  "@config": `${prefix}/config/`,
  "@constants": `${prefix}/constants/`,
  "@hooks": `${prefix}/hooks/`,
  "@pages": `${prefix}/pages/`,
});

module.exports = path_aliases;