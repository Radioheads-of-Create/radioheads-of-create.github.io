<script setup>
{/* prettier-ignore */}
import {useData} from "vitepress";

const airwaves_version = useData().frontmatter.value.airwaves_version ?? "0.0.0";
const airwaves_version_no_build_number = airwaves_version.replace("v", "").split("-")[0];

const _split = airwaves_version_no_build_number.split(".");
const next_minor_version = `${_split[0]}.${Number(_split[1]) + 1}.0`;
</script>

# Depending on Airwaves

### Airwaves version: **{{ airwaves_version_no_build_number }}**

### Minecraft version: **{{ $frontmatter.minecraft_version }}**

This page describes how a mod developer can add a dependency on Airwaves.

Release jars of Airwaves...
//TODO: add stuff


## Types of Dependencies

### Development Environment Dependency

This type of dependency is added to the Gradle buildscript so that Gradle and your IDE can find Airwaves's code.

#### Configuration

The following code defines the maven where Airwaves and Registrate jars are hosted and defines dependencies on those.