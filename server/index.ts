import "./configs/setup";

import server_config from "./configs/server";
import server from "./connections/server";

server.listen(server_config.port, server_config.hostname, () =>
  console.info(`Server listening on https://${server_config.hostname}:${server_config.port}`)
);
