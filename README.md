# n8n-nodes-v3-dummy

> [!WARNING]
> **This is a dummy package for testing. It has no real use.**
>
> Do not install it to automate anything. It integrates with no service and
> does nothing useful. It exists only to test n8n's node API version guard.

## What it is for

The package declares `n8n.n8nNodesApiVersion: 3` in its `package.json`:

```json
"n8n": {
  "n8nNodesApiVersion": 3,
  "strict": true,
  "credentials": [],
  "nodes": ["dist/nodes/V3Dummy/V3Dummy.node.js"]
}
```

An n8n instance that supports up to node API version 1 must **reject** the
install and leave no partial state behind. An instance that supports version 3
must install it, and the "V3 Dummy" node must appear in the node panel.

The guard reads the `package.json` metadata only. The node code itself uses no
version 3 API, so it loads and runs on any instance that accepts the package.

This package is published without npm provenance. It is **not** a verified
community node and is not in the n8n community nodes catalog. Keep it that way.

## The node

**V3 Dummy** takes items in and gives the same items back.

| Parameter | Type | Default | Effect |
|---|---|---|---|
| Return Test Data | boolean | `true` | Adds `v3dummy: true` to every returned item |

It makes no network calls and needs no credentials.

## Development

```sh
npm install
npm run build
npm run lint
node test-execute.mjs   # self-check for the execute logic
```

## License

MIT
