const url = 'https://github.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/blame/master/data/posts.json';
export const fetchAPI = async (url) => {
  try {
      let response = await fetch(url)
      let data = await response.json();
      return data
  }
  catch {
      throw new Error('nieje mut')
  }
}