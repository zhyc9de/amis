amis.define('docs/zh-CN/components/form/input-file.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputFile 文件上传",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputFile",
    "icon": null,
    "order": 21,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>用来负责文件上传，文件上传成功后会返回文件地址，这个文件地址会作为这个表单项的值，整个表单提交的时候，其实提交的是文件地址，文件上传已经在这个控件中完成了。</p>\n<blockquote>\n<p>如果希望文件内容伴随表单一起提交，可以配置 <code>asBlob</code> 或者 <code>asBase64</code>。</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-file\",\n            \"name\": \"file\",\n            \"label\": \"File\",\n            \"accept\": \"*\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" href=\"#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口说明</h3><p>这是单文件上传模式，通过配置 <code>receiver</code> 来接管文件上传。</p>\n<p>接口发送方式是 POST, 数据体为 form-data 格式。对应的文件字段名为 <code>file</code>。这个可以通过 <code>fileField</code> 来配置。要求返回的数据格式如下。</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"xxxx\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<ul>\n<li>value：必须返回该字段用作回显，一般是文件资源地址</li>\n</ul>\n<blockquote>\n<p>注意这只是单文件上传部分，如果允许上传的文件比较大，建议用分块上传，请阅读下面的分块上传部分。</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B\" href=\"#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制文件类型</h2><p>可以配置<code>accept</code>来限制可选择的文件类型，格式是文件后缀名<code>.xxx</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-file\",\n            \"name\": \"file\",\n            \"label\": \"限制只能上传csv文件\",\n            \"accept\": \".csv\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>想要限制多个类型，则用逗号分隔，例如：<code>.csv,.md</code></p>\n<h2><a class=\"anchor\" name=\"%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0\" href=\"#%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>手动上传</h2><p>如果不希望 File 组件上传，可以配置 <code>asBlob</code> 或者 <code>asBase64</code>，采用这种方式后，组件不再自己上传了，而是直接把文件数据作为表单项的值，文件内容会在 Form 表单提交的接口里面一起带上。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-file\",\n            \"name\": \"file\",\n            \"label\": \"File\",\n            \"accept\": \"*\",\n            \"asBlob\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中，选择任意文件，然后观察数据域变化；点击提交，amis 自动会调整接口数据格式为<code>FormData</code></p>\n<h2><a class=\"anchor\" name=\"%E5%88%86%E5%9D%97%E4%B8%8A%E4%BC%A0\" href=\"#%E5%88%86%E5%9D%97%E4%B8%8A%E4%BC%A0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>分块上传</h2><p>如果文件过大，则可能需要使用分块上传，默认大于 5M（chunkSize 配置决定） 的文件是会自动开启，可以通过 <code>useChunk</code> 配置成 false 关闭。</p>\n<p>分块上传需要配置三个接口来完成分别是:</p>\n<ul>\n<li><code>startChunkApi</code> 用来做分块前的准备工作</li>\n<li><code>chunkApi</code> 用来接收每个分块上传</li>\n<li><code>finishChunkApi</code> 用来收尾分块上传</li>\n</ul>\n<h3><a class=\"anchor\" name=\"startchunkapi\" href=\"#startchunkapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>startChunkApi</h3><p>用来做分块前的准备工作，一个文件只会调用一次。如果出错了，后续的分块上传就会中断。</p>\n<p>发送说明：默认是 post，发送的数据中会包含 <code>filename</code> 字段，记录文件名，默认的数据体格式为 json。可以额外配置参数，请参考 API 的配置说明。</p>\n<p>要求返回的数据中必须包含：</p>\n<ul>\n<li><code>uploadId</code> 这次上传的唯一 ID。</li>\n<li><code>key</code> 有点类似 <code>uploadId</code>，可有可无，爱速搭中用来记录后端文件存储路径。</li>\n</ul>\n<p>其他属性返回目前是没有任何作用的。</p>\n<p>如：</p>\n<pre><code>{\n  &quot;status&quot;: 0,\n  &quot;msg&quot;: &quot;&quot;,\n  &quot;data&quot;: {\n    &quot;key&quot;: &quot;images/JSSDK_page-xxxx.zip&quot;,\n    &quot;uploadId&quot;: &quot;036f64cd5dd95750d4bcb33556b629c6&quot;\n  }\n}\n</code></pre>\n<h3><a class=\"anchor\" name=\"chunkapi\" href=\"#chunkapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>chunkApi</h3><p>用来接收每个分块上传，大文件会根据 chunkSize 分割成多块，然后每块上传都会调用这个接口。</p>\n<p>发送说明：默认为 post，发送体格式为 form-data。包含以下信息：</p>\n<ul>\n<li><code>uploadId</code> startChunkApi 返回的</li>\n<li><code>key</code> startChunkApi 返回的</li>\n<li><code>partNumber</code> 分块序号，从 1 开始。</li>\n<li><code>partSize</code> 分块大小</li>\n<li><code>file</code> 文件体</li>\n</ul>\n<p>要求返回的数据中必须包含:</p>\n<ul>\n<li><code>eTag</code> 通常为文件的内容戳。</li>\n</ul>\n<p>如：</p>\n<pre><code>{\n  &quot;status&quot;: 0,\n  &quot;msg&quot;: &quot;&quot;,\n  &quot;data&quot;: {\n    &quot;eTag&quot;: &quot;016bd9b68ddd5cd7318875da3ea28207&quot;\n  }\n}\n</code></pre>\n<h3><a class=\"anchor\" name=\"finishchunkapi\" href=\"#finishchunkapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>finishChunkApi</h3><p>等所有分块上传完后，将上传文件收集到的 <code>eTag</code> 信息合并一起，再次请求后端完成文件上传。</p>\n<p>发送说明：默认为 post，数据体默认为 json，包含以下信息</p>\n<ul>\n<li><code>filename</code> 文件名</li>\n<li><code>key</code> startChunkApi 返回的</li>\n<li><code>uploadId</code> startChunkApi 返回的</li>\n<li><code>partList</code> 数组，每个成员为 <code>{partNumber: xxx, eTag: &quot;xxxxx&quot;}</code> 即分块编号和分块 <code>eTag</code> 信息。</li>\n</ul>\n<p>数据返回，类似单文件上传一样，必须有 <code>value</code> 属性，可选返回 <code>url</code> 用来决定文件的下载地址。如：</p>\n<pre><code>{\n  &quot;status&quot;: 0,\n  &quot;msg&quot;: &quot;&quot;,\n  &quot;data&quot;: {\n    &quot;value&quot;: &quot;https://xxxx.cdn.bcebos.com/images/JSSDK_page-xxxxx.zip&quot;\n  }\n}\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85\" href=\"#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自动填充</h2><p>上传成功后，可以通过配置 <code>autoFill</code> 将上传接口返回的值填充到某个表单项中（在非表单下暂不支持）：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-file\",\n      \"name\": \"file\",\n      \"label\": \"File\",\n      \"accept\": \"*\",\n      \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n      \"autoFill\": {\n        \"myUrl\": \"${url}\"\n      }\n    },\n    {\n      \"type\": \"input-text\",\n      \"name\": \"myUrl\",\n      \"label\": \"url\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中，file 组件上传后，接口返回格式例如如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"xxxxxxx\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"filename\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"xxxx.csv\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"url\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"http://xxxx.xxx.xxx\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>然后 file 上配置：</p>\n<pre><code class=\"language-json\"><span class=\"token property\">\"autoFill\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"myUrl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"${url}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>这样上传成功后，会把接口中的 <code>url</code> 变量，赋值给 <code>myUrl</code> 变量</p>\n<p><strong>多选模式</strong></p>\n<p>当表单项为多选模式时，不能再直接取选项中的值了，而是通过 <code>items</code> 变量来取，通过它可以获取当前选中的选项集合。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-file\",\n      \"name\": \"file\",\n      \"label\": \"File\",\n      \"multiple\": true,\n      \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n      \"autoFill\": {\n        \"myUrl\": \"${items|pick:url}\",\n        \"lastUrl\": \"${items|last|pick:url}\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0\" href=\"#%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>拖拽上传</h2><p>把文件拖入指定区域，完成上传，同样支持点击上传。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-file\",\n            \"name\": \"file\",\n            \"label\": \"File\",\n            \"accept\": \"*\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n            \"drag\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>receiver</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>上传文件接口</td>\n</tr>\n<tr>\n<td>accept</td>\n<td><code>string</code></td>\n<td><code>text/plain</code></td>\n<td>默认只支持纯文本，要支持其他类型，请配置此属性为文件后缀<code>.xxx</code></td>\n</tr>\n<tr>\n<td>asBase64</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>将文件以<code>base64</code>的形式，赋值给当前组件</td>\n</tr>\n<tr>\n<td>asBlob</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>将文件以二进制的形式，赋值给当前组件</td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td><code>number</code></td>\n<td></td>\n<td>默认没有限制，当设置后，文件大小大于此值将不允许上传。单位为<code>B</code></td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>默认没有限制，当设置后，一次只允许上传指定数量文件。</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否多选。</td>\n</tr>\n<tr>\n<td>drag</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否为拖拽上传</td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>autoUpload</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>否选择完就自动开始上传</td>\n</tr>\n<tr>\n<td>hideUploadButton</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>隐藏上传按钮</td>\n</tr>\n<tr>\n<td>stateTextMap</td>\n<td>object</td>\n<td><code>{ init: &#39;&#39;, pending: &#39;等待上传&#39;, uploading: &#39;上传中&#39;, error: &#39;上传出错&#39;, uploaded: &#39;已上传&#39;, ready: &#39;&#39; }</code></td>\n<td>上传状态文案</td>\n</tr>\n<tr>\n<td>fileField</td>\n<td><code>string</code></td>\n<td><code>file</code></td>\n<td>如果你不想自己存储，则可以忽略此属性。</td>\n</tr>\n<tr>\n<td>nameField</td>\n<td><code>string</code></td>\n<td><code>name</code></td>\n<td>接口返回哪个字段用来标识文件名</td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>string</code></td>\n<td><code>value</code></td>\n<td>文件的值用那个字段来标识。</td>\n</tr>\n<tr>\n<td>urlField</td>\n<td><code>string</code></td>\n<td><code>url</code></td>\n<td>文件下载地址的字段名。</td>\n</tr>\n<tr>\n<td>btnLabel</td>\n<td><code>string</code></td>\n<td></td>\n<td>上传按钮的文字</td>\n</tr>\n<tr>\n<td>downloadUrl</td>\n<td><code>boolean</code>或<code>string</code></td>\n<td><code>&quot;&quot;</code> 1.1.6 版本开始支持 <code>post:http://xxx.com/${value}</code> 这种写法</td>\n<td>默认显示文件路径的时候会支持直接下载，可以支持加前缀如：<code>http://xx.dom/filename=</code> ，如果不希望这样，可以把当前配置项设置为 <code>false</code>。</td>\n</tr>\n<tr>\n<td>useChunk</td>\n<td><code>boolean</code>或<code>&quot;auto&quot;</code></td>\n<td><code>&quot;auto&quot;</code></td>\n<td>amis 所在服务器，限制了文件上传大小不得超出 10M，所以 amis 在用户选择大文件的时候，自动会改成分块上传模式。</td>\n</tr>\n<tr>\n<td>chunkSize</td>\n<td><code>number</code></td>\n<td><code>5 * 1024 * 1024</code></td>\n<td>分块大小</td>\n</tr>\n<tr>\n<td>startChunkApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>startChunkApi</td>\n</tr>\n<tr>\n<td>chunkApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>chunkApi</td>\n</tr>\n<tr>\n<td>finishChunkApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>finishChunkApi</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>file: Array&lt;FileValue&gt;</code></td>\n<td>文件值发生变化时触发</td>\n</tr>\n<tr>\n<td>remove</td>\n<td><code>file: FileValue</code></td>\n<td>被移除的文件</td>\n</tr>\n<tr>\n<td>success</td>\n<td><code>file: FileValue</code></td>\n<td>上传成功的文件</td>\n</tr>\n<tr>\n<td>fail</td>\n<td><code>file: FileValue</code></td>\n<td>上传失败的文件</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"filevalue-%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#filevalue-%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>FileValue 属性表</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>name</td>\n<td><code>string</code></td>\n<td>文件名称</td>\n</tr>\n<tr>\n<td>value</td>\n<td><code>string</code></td>\n<td>上传成功后返回的 url</td>\n</tr>\n<tr>\n<td>state</td>\n<td><code>string</code></td>\n<td>文件当前状态,值可为 <code>pending</code> <code>uploaded</code> <code>invalid</code></td>\n</tr>\n<tr>\n<td>error</td>\n<td><code>string</code></td>\n<td>错误信息</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2,
          "children": [
            {
              "label": "接口说明",
              "fragment": "%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "level": 3
            }
          ]
        },
        {
          "label": "限制文件类型",
          "fragment": "%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",
          "level": 2
        },
        {
          "label": "手动上传",
          "fragment": "%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0",
          "fullPath": "#%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0",
          "level": 2
        },
        {
          "label": "分块上传",
          "fragment": "%E5%88%86%E5%9D%97%E4%B8%8A%E4%BC%A0",
          "fullPath": "#%E5%88%86%E5%9D%97%E4%B8%8A%E4%BC%A0",
          "level": 2,
          "children": [
            {
              "label": "startChunkApi",
              "fragment": "startchunkapi",
              "fullPath": "#startchunkapi",
              "level": 3
            },
            {
              "label": "chunkApi",
              "fragment": "chunkapi",
              "fullPath": "#chunkapi",
              "level": 3
            },
            {
              "label": "finishChunkApi",
              "fragment": "finishchunkapi",
              "fullPath": "#finishchunkapi",
              "level": 3
            }
          ]
        },
        {
          "label": "自动填充",
          "fragment": "%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85",
          "fullPath": "#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85",
          "level": 2
        },
        {
          "label": "拖拽上传",
          "fragment": "%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0",
          "fullPath": "#%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "FileValue 属性表",
              "fragment": "filevalue-%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "fullPath": "#filevalue-%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
