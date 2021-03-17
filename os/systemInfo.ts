import arch from "https://deno.land/x/arch@v1.0.0/mod.ts";

const { os } = Deno.build;

const systemInfo = {
  /**
    * @description return the os platform name
    * @returns { string } "darwin" | "linux" | "windows"
    * @since v0.1.0
    */
  platform: (): string => os,

  /**
    * @description return the os architecture 
    * @returns { Promise<"x86" | "x64"> }
    * @since v0.1.0 
    */
  arch: async (): Promise<"x64" | "x86"> => await arch(),
};

export default systemInfo;
