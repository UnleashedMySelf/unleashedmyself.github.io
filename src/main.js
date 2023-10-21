/**
 * imports
 */
import "./css/main.css";
import Alpine from "alpinejs";
import "./helpers";

//Alpine plugins
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";

//stores
import { stopScroll } from "@/alpine/store/stop-scroll";

//components
import components from "@/alpine/components";

window.Alpine = Alpine;

//plugins
Alpine.plugin(intersect);
Alpine.plugin(collapse);

//stores
Alpine.store("stop-scroll", stopScroll);

//components
Alpine.data("marquee", components.marquee);
Alpine.data("projects", components.projects);

Alpine.start();
