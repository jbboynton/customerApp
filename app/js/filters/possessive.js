/**
 * Possessive filter definition file.
 *
 * Takes a name, and returns the correct possessive form.
 * For example:
 *    {{ "James" | possessive }}  =>  James'
 *    {{  "Jim"  | possessive }}  =>  Jim's
 */

module.exports = function() {
  return function(name) {
    if (name) {
      if (name.slice(-1) == 'S' || (name.slice(-1) == 's'))
        return name + "\'";
      else
        return name + "\'s";
    } else {
      return name;
    }
  };
};
