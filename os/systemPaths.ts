const { env } = Deno;
const systemPaths = {
  /**
    * @description return the system home dir
    * @returns { string }
    * @since v0.1.0
    */
  homeDir: () => env.get("HOME") ?? env.get("USERPROFILE"),

  /**
    * @description return the system Temporary files dir
    * @returns { string }
    * @since v0.1.0
    */
  tempDir: () => env.get("TEMP") ?? env.get("TEMPDIR"),
};
/**
 * @description return the system home dir
 * @returns { string }
 * @since v0.1.0
 */

export default systemPaths;
