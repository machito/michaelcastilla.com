/* Utilties */

/* cleanProjectName function */

const Utilities = {
  cleanProjectName: function(data) {
    try {
      let d = data
          d = d &&
          d
          .toString()
          .toLowerCase()
          .replace('1','one-')
          .replace('&','and')
          .split(' ')
          .join('-')
      return d
    }
    catch(error) { return error }
  }
}

export default Utilities
