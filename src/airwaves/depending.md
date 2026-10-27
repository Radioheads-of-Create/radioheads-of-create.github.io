---
airwaves_version: 1.0.0
minecraft_version: 1.21.1

prev:
  text: Airwaves
  link: /airwaves


title: Airwaves
description: Depending on Airwaves
---

<!--@include: ./template.md-->

```groovy [build.gradle]
repositories {
    maven { url = "https://insert.maven.here" }
}

dependencies {
    implementation("dev.radioheads:airwaves:${minecraft_version}-${airwaves_version}")
}
```

And in your `gradle.properties` file:
```properties-vue [gradle.properties]
airwaves_version={{ $frontmatter.airwaves_version }}
```

### Production Environment Dependency

This type of dependency is added to the `neoforge.mods.toml` file so that NeoForge knows your mod will not work without a certain
version of Airwaves. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without Airwaves.

#### Configuration

Add the following dependency definition to your `neoforge.mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on Airwaves.
If Airwaves is not present or is outdated, NeoForge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${mod_id}]]
    modId="airwaves"
    type="required"
    versionRange="[{{ $frontmatter.airwaves_version }},)"
    ordering="NONE"
    side="BOTH"
```
