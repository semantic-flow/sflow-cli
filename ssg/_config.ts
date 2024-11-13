import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";

const site = lume({
  src: "../src/documentation",
  dest: "../docs",
});

site.copy("assets");

site.use(base_path());
site.use(check_urls());
site.use(code_highlight());
site.use(date());


export default site;
