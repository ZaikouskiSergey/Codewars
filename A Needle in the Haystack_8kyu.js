function findNeedle(haystack) {
    let searchIndex = haystack.findIndex(el => el ==="needle")
   if (searchIndex) {
        return `found the needle at position ${searchIndex}`
    } else {
        return "Your function didn't return anything"
    }
  }
  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))