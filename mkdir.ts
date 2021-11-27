try {
  await Deno.mkdir("webdb_press");
} catch (error) {
  console.log(error);
}
